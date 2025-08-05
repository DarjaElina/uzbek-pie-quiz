const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="flex flex-col justify-center items-center h-[60vh] text-center text-2xl font-medium gap-4">
        <span className="animate-spin text-3xl">🥟</span>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
