export function transformForSyllabus(payload) {
  const classList = payload.classList;
  const classWithSubjectList = payload.classWithSubjectList;
  const topicWithClassSubjectList = payload.topicWithClassSubjectList;
  let resultForSyllabus = classList.map(
    ({ class_id: class_id, class_name: class_name }) => ({
      class_id,
      class_name,
      subjects: classWithSubjectList
        .filter((q) => q.class_id === class_id)
        .map(({ subject_id: subject_id, subject_name: subject_name }) => ({
          subject_id,
          subject_name,
          topics: topicWithClassSubjectList
            .filter(
              (q) => q.class_id === class_id && q.subject_id === subject_id
            )
            .map(({ topic_name: topic_name }) => ({
              topic_name,
            })),
        })),
    })
  );
  console.log(resultForSyllabus);
  return resultForSyllabus;
}

[
  {
    class_id: 1,
    class_name: "5th",
    subjects: [
      {
        subejct_id: 1,
        subejct_name: "test",
        topics: [{ topic_id: "test" }, { topic_id: "test2" }],
      },
      { subejct_id: 1, subejct_name: "test", topics: [] },
    ],
  },
  {
    class_id: 1,
    class_name: "5th",
    subjects: [
      { subejct_id: 1, subejct_name: "test", topics: [] },
      { subejct_id: 1, subejct_name: "test" },
    ],
  },
  {
    class_id: 1,
    class_name: "5th",
    subjects: [
      { subejct_id: 1, subejct_name: "test", topics: [] },
      { subejct_id: 1, subejct_name: "test" },
    ],
  },
  {
    class_id: 1,
    class_name: "5th",
    subjects: [
      { subejct_id: 1, subejct_name: "test", topics: [] },
      { subejct_id: 1, subejct_name: "test" },
    ],
  },
  {
    class_id: 1,
    class_name: "5th",
    subjects: [
      { subejct_id: 1, subejct_name: "test", topics: [] },
      { subejct_id: 1, subejct_name: "test" },
    ],
  },
];
