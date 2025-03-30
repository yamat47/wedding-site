export function FamilyRequests() {
  const requests = [
    {
      person: "新郎母・新婦父",
      request: "挙式中に誓いの質問をしていただくため、質問内容の準備をお願い",
    },
    {
      person: "担当親族",
      request: "一部ゲストへのお車代封筒を、披露宴前にお渡しいただく",
    },
    {
      person: "新郎父",
      request: "披露宴の結びにて両家代表の挨拶をお願い",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {requests.map((request, index) => (
          <div key={index} className="relative">
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-stone-200"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-stone-200"></div>
            <div className="p-8">
              <h3 className="text-xl font-light tracking-wide font-display mb-6 text-center">{request.person}</h3>
              <p className="text-stone-600 tracking-wide font-sans leading-relaxed text-center">{request.request}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

