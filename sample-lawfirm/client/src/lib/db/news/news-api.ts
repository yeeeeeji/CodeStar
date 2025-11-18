import { db } from '@/lib/db/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { corporateConverter, mediaConverter, newsletterConverter } from './news-converter';

export async function fetchCorporateList() {
  const ref = collection(db, 'corporate').withConverter(corporateConverter);
  const snapshot = await getDocs(ref);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function fetchMediaList() {
  const ref = collection(db, 'medias').withConverter(mediaConverter);
  const snapshot = await getDocs(ref);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function fetchNewsletterList() {
  const ref = collection(db, 'newsletters').withConverter(newsletterConverter);
  const q = query(ref, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
}
