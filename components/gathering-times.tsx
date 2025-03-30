export function GatheringTimes() {
  const gatheringTimes = [
    {
      person: "山口准子様、潮田祐子様",
      time: "9:30",
      reason: "お支度のため",
    },
    {
      person: "今井彩様",
      time: "9:35",
      reason: "お支度のため",
    },
    {
      person: "安西美佐枝様",
      time: "10:25",
      reason: "お支度のため",
    },
    {
      person: "その他の皆様",
      time: "11:00",
      reason: "親族ご紹介のため",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {gatheringTimes.map((item, index) => (
          <div key={index} className="relative">
            <div className="mb-8 text-center">
              <p className="text-5xl font-light tracking-wider">{item.time}</p>
            </div>
            <div className="text-center mb-6">
              <div className="w-16 h-[1px] bg-stone-300 mx-auto"></div>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-light tracking-wide font-display">{item.person}</h3>
              <p className="text-stone-600 tracking-wide font-sans">{item.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

