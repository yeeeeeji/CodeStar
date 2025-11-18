import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { caseConverter } from "./converter";

export const fetchCaseList = async () => {
  const ref = collection(db, "cases").withConverter(caseConverter);
  const snapshot = await getDocs(ref);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const fetchTopThreeCases = async () => {
  const ref = collection(db, "cases").withConverter(caseConverter);
  const q = query(ref, orderBy("createdAt", "desc"), limit(3));

  try {
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("메인페이지 업무사례 로딩 실패", error);
    return [];
  }
};
