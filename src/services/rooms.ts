import { rooms } from '../moked_data/rooms'

import type { RoomType } from '../atoms/rooms'

export const getRooms = async () => {
  return new Promise<RoomType[]>((resolve) => {
    setTimeout(() => {
      resolve(rooms)
    }, 0)
  })
}
