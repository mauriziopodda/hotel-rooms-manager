import { RoomType } from '../atoms/rooms'
import { rooms } from '../moked_data/rooms'

export const getRooms = async () => {
  return new Promise<RoomType[]>((resolve) => {
    setTimeout(() => resolve(rooms), 0)
  })
}
