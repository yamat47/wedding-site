import Image from "next/image"

export function CoupleProfile() {
  const profiles = [
    {
      title: "新郎",
      name: "山口 拓弥",
      birthdate: "1993年5月10日生",
      birthplace: "東京都出身",
      height: "163cm",
      hobbies: "アメフト、プログラミング",
      food: "焼肉",
    },
    {
      title: "新婦",
      name: "潮田 麻衣",
      birthdate: "1993年6月11日生",
      birthplace: "東京都出身",
      height: "160cm",
      hobbies: "フットサル、フェス参戦",
      food: "アイス、塩パン",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto">
      {profiles.map((profile, index) => (
        <div key={index} className="flex flex-col space-y-8">
          <div className="relative h-[450px] overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt={`${profile.title}の写真`}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-light tracking-widest font-display">{profile.name}</h3>
            <div className="w-12 h-px bg-stone-300 mx-auto"></div>
            <div className="space-y-4 text-center font-sans">
              <p className="text-stone-600 tracking-wide">{profile.birthdate}</p>
              <p className="text-stone-600 tracking-wide">
                {profile.birthplace} / {profile.height}
              </p>
              <p className="text-stone-600 tracking-wide">趣味: {profile.hobbies}</p>
              <p className="text-stone-600 tracking-wide">好きな食べ物: {profile.food}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

