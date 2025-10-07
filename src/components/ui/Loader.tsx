interface LoaderProps {
  border?: number;
  size?: number;
  fullScreen: boolean;
}

const Loader = ({ border = 4, size = 48, fullScreen }: LoaderProps) => {
  return (
    <>
      {fullScreen ? (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 z-50">
          <div
            className="border-gray-300 border-t-primary rounded-full animate-spin"
            style={{
              width: size,
              height: size,
              borderWidth: border,
            }}
          />
        </div>
      ) : (
        <div
          className="border-gray-300 border-t-primary rounded-full animate-spin"
          style={{
            width: size,
            height: size,
            borderWidth: border,
          }}
        />
      )}
    </>
  );
};

export default Loader;
