import { collection, addDoc, getDocs, query, orderBy, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { ReservationData, ReservationWithId } from './types';

export const saveReservation = async (data: ReservationData) => {
  try {
    const docRef = await addDoc(collection(db, "reservations"), data);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("예약 저장 오류:", error);
    return { success: false, error };
  }
};