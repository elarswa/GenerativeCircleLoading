const MAX_ANGLE = 180;
const ITERATIONS = 10;
const angles = Array(ITERATIONS)
  .fill(0)
  .map((val, index) => (index * MAX_ANGLE) / ITERATIONS);

const Loader = () => {
  return (
    <>
      {angles.map((val: number, index: number) => (
        <div
          key={`subContainer_${index}`}
          className="subContainer" // add 'help' to class to see origin
          style={{
            transform: `rotate(${val}deg) translate(-50%, -50%)`,
            animationDelay: `-${val * 15}ms`,
          }}
        >
          <div
            className="growCircle1"
            style={{ animationDelay: `-${val * 4}ms` }}
          />
          <div
            className="movingCircle"
            style={{ animationDelay: `-${val * 4}ms` }}
          />
          <div
            className="growCircle2"
            style={{
              animationDelay: `-${val * 4}ms`,
            }}
          />
        </div>
      ))}
    </>
  );
};

export default Loader;
