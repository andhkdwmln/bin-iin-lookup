import * as fs from 'fs';
import { parse } from 'csv-parse';

async function ReadData() {
    // Read the CSV file in root
    const csv = fs.readFileSync('./data/bin.csv', 'utf8');
    // Parse the CSV file into an array of objects
    const records: { BIN: string, Brand: string, Type: string, Category: string, Issuer: string, IssuerPhone: string, IssuerUrl: string, isoCode2: string, isoCode3: string, CountryName: string }[] = await new Promise((resolve, reject) => {
        parse(csv, {
            columns: true,
            skip_empty_lines: true
        }, (err, records) => {
            if (err) {
                reject(err);
            } else {
                resolve(records);
            }
        });
    });

    return records;
}

export async function BinLookup(bin: string) {

    // if bin is not 6 digits, decrease the length to 6
    if (bin.length > 6) {
        bin = bin.substring(0, 6);
    }

    // Read the CSV file
    const records = await ReadData();
    
    // Find the record with the matching BIN
    const record = records.find(r => r.BIN === bin);
    
    // If record is found, return the specific details; otherwise, return an error message
    if (record) {
        return {
            bin: bin,
            data: {
                brand: record.Brand,
                type: record.Type,
                category: record.Category,
                issuer: record.Issuer,
                countryCode: record.isoCode2,
                countryName: record.CountryName
            }
        }
    } else {
        return {
            bin: bin,
            error: 'BIN not found.'
        }
    }
}

exports.BinLookup = BinLookup;