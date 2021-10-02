require("dotenv").config();

const AWS = require("aws-sdk");

// Configure client for use with Spaces
const spacesEndpoint = new AWS.Endpoint(process.env.DO_SPACES_ENDPOINT);
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.DO_SPACES_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET,
});

module.exports = async function uploadToS3(path, file) {
  var params = {
    Body: file,
    Bucket: process.env.DO_SPACES_NAME,
    Key: path,
    ACL: "public-read",
  };
  const result = await s3.putObject(params).promise();
  console.log(`"${path}" was successfully uploaded to S3`);
  return result;
};
