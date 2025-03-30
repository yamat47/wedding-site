import { MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GoogleMap } from "@/components/google-map"

export function Access() {
  const weddingLocation = "FISH BANK TOKYO"
  const weddingAddress = "東京都港区東新橋1-5-2 汐留シティセンター41階"
  const googleMapUrl = "https://maps.app.goo.gl/kJVwANPREf137bWv6"

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1">
        <div className="space-y-6 max-w-xl">
          <h3 className="text-2xl font-light tracking-wide">{weddingLocation}</h3>
          <p className="text-lg text-stone-600">{weddingAddress}</p>
          <div className="space-y-4 mt-10">
            <h4 className="text-lg text-stone-500 tracking-wide">最寄駅からの所要時間:</h4>
            <ul className="space-y-4 pb-8 text-stone-600">
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-stone-400 mt-2.5 mr-3"></span>
                JR山手線・東京メトロ銀座線「新橋駅」 汐留口 徒歩3分
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-stone-400 mt-2.5 mr-3"></span>
                都営浅草線「新橋駅」 汐留方面出口 徒歩2分
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-stone-400 mt-2.5 mr-3"></span>
                都営大江戸線「汐留駅」 新橋方面出口 徒歩1分
              </li>
            </ul>
            <Button variant="outline" className="mt-8 border-stone-300 text-stone-700 hover:bg-stone-100" asChild>
              <a href={googleMapUrl} target="_blank" rel="noopener noreferrer">
                <MapPin className="h-4 w-4 mr-2" />
                Googleマップで見る
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2 relative h-96 md:h-[500px] overflow-hidden">
        <GoogleMap />
      </div>
    </div>
  )
}


