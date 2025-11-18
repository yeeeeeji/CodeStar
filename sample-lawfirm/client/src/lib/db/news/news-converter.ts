import { QueryDocumentSnapshot, DocumentData, Timestamp } from 'firebase/firestore';
import { CodestarMedia, Corporate, Newsletter } from './types';

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

export const newsletterConverter = {
  toFirestore(data: Newsletter): DocumentData {
    return data;
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): Newsletter {
    const d = snapshot.data();
    return {
      title: d.title,
      content: d.content,
      createdAt: (d.createdAt as Timestamp).toDate(),
      updatedAt: (d.updatedAt as Timestamp).toDate()
    };
  }
};
