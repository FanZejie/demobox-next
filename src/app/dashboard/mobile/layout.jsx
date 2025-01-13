'use client'
import { useRouter } from 'next/navigation'

const MobileLayout = ({ children }) => {
  const router = useRouter()

  const scenes = [
    { name: '场景 1', path: '/dashboard/mobile/view1' },
    { name: '场景 2', path: '/dashboard/mobile/view2' },
    { name: '场景 3', path: '/dashboard/mobile/view3' },
  ]

  return (
    <div className="flex items-center justify-center h-full bg-gray-100 p-4">
      {/* 左侧场景按钮 */}
      <div className="flex flex-col gap-4 mr-4">
        {scenes.map((scene, index) => (
          <button
            key={index}
            onClick={() => router.push(scene.path)}
            className="px-6 py-3 bg-white rounded-lg shadow-md hover:bg-blue-50 
                     transition-colors duration-200 font-medium text-gray-700
                     border border-gray-200 hover:border-blue-300"
          >
            {scene.name}
          </button>
        ))}
      </div>

      {/* iPhone 设备 */}
      <div className="relative  border-[16px] border-black rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
        {/* iPhone 顶部刘海 */}
        <div className="absolute top-0 inset-x-0">
          <div className="h-[24px] w-[148px] bg-black mx-auto rounded-b-[1rem]"></div>
        </div>
        
        {/* 电源键 */}
        <div className="absolute -right-[16px] top-[64px] h-[32px] w-[4px] bg-black rounded-r"></div>
        
        {/* 音量键 */}
        <div className="absolute -left-[16px] top-[64px] h-[64px] w-[4px] bg-black rounded-l"></div>
        <div className="absolute -left-[16px] top-[144px] h-[64px] w-[4px] bg-black rounded-l"></div>
        
        {/* 屏幕内容 */}
        <div className="relative h-full w-full bg-white overflow-hidden rounded-[1.5rem]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MobileLayout; 