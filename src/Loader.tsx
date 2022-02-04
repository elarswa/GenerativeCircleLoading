// to match https://www.reddit.com/r/generative/comments/sbpj5r/delay_rotate/?utm_medium=android_app&utm_source=share
// set Iterations to 20 and delay to 20
const MAX_ANGLE = 180;
const ITERATIONS = 10;
const DELAY = 8.2;
const ROTATION_DELAY = 15;
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
            animationDelay: `-${val * ROTATION_DELAY}ms`,
          }}
        >
          <div
            className="growCircle1"
            style={{ animationDelay: `-${val * DELAY}ms` }}
          />
          <div
            className="movingCircle"
            style={{ animationDelay: `-${val * DELAY}ms` }}
          />
          <div
            className="growCircle2"
            style={{
              animationDelay: `-${val * DELAY}ms`,
            }}
          />
        </div>
      ))}
    </>
  );
};

export default Loader;
