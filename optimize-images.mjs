
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const publicDir = './public';

const imagesToOptimize = [
    'hero_inclusive.png',
    'service_audit.png',
    'service_strategy.png',
    'service_tax.png',
    'olugbenga_folarin.jpg',
    'ayomiposi_awoniyi.jpg'
];

async function optimizeImages() {
    console.log('Starting image optimization...');

    for (const imageName of imagesToOptimize) {
        const imagePath = path.join(publicDir, imageName);
        try {
            const image = sharp(imagePath);
            const metadata = await image.metadata();

            let optimizedImage;

            if (metadata.width && metadata.width > 1200) {
                optimizedImage = image.resize({ width: 1200 });
            } else {
                optimizedImage = image;
            }

            if (metadata.format === 'jpeg') {
                optimizedImage = optimizedImage.jpeg({ quality: 80 });
            } else if (metadata.format === 'png') {
                optimizedImage = optimizedImage.png({ quality: 80, compressionLevel: 8 });
            }

            const tempPath = `${imagePath}.tmp`;
            await optimizedImage.toFile(tempPath);

            await fs.rename(tempPath, imagePath);

            console.log(`Optimized ${imageName}`);

        } catch (err) {
            console.error(`Could not optimize ${imageName}:`, err);
        }
    }

    console.log('Image optimization complete.');
}

optimizeImages();
