import ChartCombo from "./components/chartCombo";
import TreeGraphComponent from "./components/TreeGraphComponent";


const Page = () => {
  return (
    <div className="flex flex-col">
      <div className="top h-[300px] bg-gradient-to-r from-[#1e3c72] to-[#2a5298] p-2">
        <div className="h-[170px] w-full flex flex-row  overflow-x-auto">
          <ChartCombo className="w-[300px] h-[150px] bg-white rounded-lg mx-2 flex-shrink-0" title="Lottery Sales"></ChartCombo>
          <ChartCombo className="w-[300px] h-[150px] bg-white rounded-lg mx-2 flex-shrink-0" title="High-frequency  Sales"></ChartCombo>
          <ChartCombo className="w-[300px] h-[150px] bg-white rounded-lg mx-2 flex-shrink-0" title="Tool platform"></ChartCombo>
          <ChartCombo className="w-[300px] h-[150px] bg-white rounded-lg mx-2 flex-shrink-0" title="Third-party services"></ChartCombo>
          <ChartCombo className="w-[300px] h-[150px] bg-white rounded-lg mx-2 flex-shrink-0" title="OA (Office Automation) system"></ChartCombo>
          <ChartCombo className="w-[300px] h-[150px] bg-white rounded-lg mx-2 flex-shrink-0" title="Other Business1"></ChartCombo>
          <ChartCombo className="w-[300px] h-[150px] bg-white rounded-lg mx-2 flex-shrink-0" title="Other Business2"></ChartCombo>
          <ChartCombo className="w-[300px] h-[150px] bg-white rounded-lg mx-2 flex-shrink-0" title="Other Business3"></ChartCombo>
        </div>
      </div>

      <div className="bottom w-full flex flex-row gap-2 p-2">
        <div style={{ height: 'calc(100vh - 270px)' }}  className="bottom-left w-3/5 bg-slate-100 mt-[-120px] rounded-lg">
          <TreeGraphComponent></TreeGraphComponent>
        </div>
        <div style={{ height: 'calc(100vh - 270px)' }} className="bottom-right w-2/5  bg-green-300 mt-[-120px] rounded-lg"></div>

      </div>
    </div>
  )
};



export default Page;
