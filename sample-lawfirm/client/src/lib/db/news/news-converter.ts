import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { CodestarMedia, Corporate } from './types';

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

export const mediaConverter = {
  toFirestore(data: CodestarMedia): DocumentData {
    return data;
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): CodestarMedia {
    const d = snapshot.data();
    return {
      image: d.thumbnail
    };
  }
};
