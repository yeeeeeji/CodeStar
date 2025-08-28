export interface ReservationData {
  name: string;
  phone: string;
  content: string;
  fileName?: string | null;
  createdAt: Date;
  status: '대기' | '확정' | '취소';
}

export interface ReservationWithId extends ReservationData {
  id: string;
}