const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500; // Default to 500 if no status code is provided
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack, // Hide stack trace in production
  });
};

export default errorMiddleware;
