const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full mt-4">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div className="text-xs font-semibold inline-block py-1 px-2 rounded text-teal-600 bg-teal-200">
            {progress}%
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative flex mb-2 items-center justify-between">
            <div className="flex-1 border border-teal-200 rounded">
              <div
                className="bg-teal-600 text-xs leading-none py-1 text-center text-white"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
