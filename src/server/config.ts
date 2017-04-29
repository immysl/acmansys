import fs from 'fs';
import path from 'path';

interface Assets {
  bundle: {
    js: string,
    css: string
  };

  vendor: {
    js: string,
    css: string
  };
}

function loadAssets(): Assets {
  try {
    const raw: any = fs.readFileSync(path.join(__dirname, '../assets.json'));

    return JSON.parse(String(raw));
  } catch (error) {
    return {
      bundle: {
        js: 'bundle.js',
        css: 'bundle.css'
      },
      vendor: {
        js: 'vendor.js',
        css: 'vendor.css'
      }
    };
  }
}

export const assets: Assets = loadAssets();
export const production: boolean = process.env.NODE_ENV === 'production';
export const port: number = Number(process.env.PORT || 3000);
