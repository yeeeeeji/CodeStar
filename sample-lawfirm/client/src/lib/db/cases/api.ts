import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { caseConverter } from "./converter";

export const fetchCases = async (caseLimit: number = 9999) => {
  const ref = collection(db, "cases").withConverter(caseConverter);
  const q = query(ref, orderBy("createdAt", "desc"), limit(caseLimit));

  try {
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("업무사례 로딩 실패", error);
    return [];
  }
};

export const fetchCasesByCategory = async (category: string) => {
  const ref = collection(db, "cases").withConverter(caseConverter);
  const q = query(ref, where("category", "==", category), limit(9));

  try {
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("카테고리 검색 실패", error);
    return [];
  }
};

export const fetchCase = async (id: string) => {
  const ref = doc(db, "cases", id).withConverter(caseConverter);

  try {
    const snapshot = await getDoc(ref);
    return snapshot.data();
  } catch (error) {
    console.error("업무사례 상세페이지 조회 실패", error);
    return undefined;
  }
};
