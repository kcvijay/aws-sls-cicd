exports.logger = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'AWS Serverless Framework CI/CD Demo',
      timestamp: new Date().toISOString(),
      version: '1.0',
    }),
  };
};
