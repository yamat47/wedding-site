export function Timeline() {
  // タイムラインの内容を更新（説明文を削除）
  const timelineEvents = [
    {
      time: "11:15",
      title: "受付開始",
    },
    {
      time: "12:00",
      title: "挙式",
    },
    {
      time: "12:30",
      title: "集合写真",
    },
    {
      time: "12:45",
      title: "披露宴",
    },
    {
      time: "13:20",
      title: "ケーキカット",
    },
    {
      time: "15:00",
      title: "お見送り（閉宴）",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto flex justify-center">
      <div className="space-y-16 w-full max-w-xl">
        {timelineEvents.map((event, index) => (
          <div key={index} className="flex">
            <div className="mr-12 text-right min-w-[80px]">
              <div className="text-xl font-light tracking-wide">{event.time}</div>
            </div>
            <div className="relative">
              <div className="absolute top-2 -left-3 w-1.5 h-1.5 rounded-full bg-stone-300"></div>
              <div className="border-l border-stone-200 pl-10">
                <h3 className="text-xl font-light tracking-wide font-display">{event.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

