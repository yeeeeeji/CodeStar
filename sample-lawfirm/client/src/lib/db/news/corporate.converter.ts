import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { Corporate } from './types';

export const corporateConverter = {
  toFirestore(data: Corporate): DocumentData {
    return data;
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): Corporate {
    const d = snapshot.data();
    return {
      image: d.image,
      title: d.title
    };
  }
};
