export default function getModelPath(path: any) {
  if (process.env.NODE_ENV === "development") {
    return path;
  }
  // For production (handles subfolder deployments)
  return process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}${path}` : path;
}
