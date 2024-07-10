# Actualizar S3
npm run build
aws s3 sync build/ s3://frontend-btg-challenge-bucket