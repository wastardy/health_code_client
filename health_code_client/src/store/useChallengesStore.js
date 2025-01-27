import { create } from 'zustand';

const useStore = create((set) => ({
  challenges: [
    {
      id: 1,
      icon: "src/assets/logos/test1.png",
      title: "Sort of description",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    },
    {
      id: 2,
      icon: "src/assets/logos/test2.png",
      title: "Sort of description",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    },
    {
      id: 3,
      icon: "src/assets/logos/test3.png",
      title: "Sort of description",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    },
    {
      id: 4,
      icon: "src/assets/logos/test4.png",
      title: "Sort of description",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    },
    {
      id: 5,
      icon: "src/assets/logos/test5.png",
      title: "Sort of description",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    },
  ],
  completedChallenges: [],
  addChallenge: (newChallenge) =>
    set((state) => ({ challenges: [...state.challenges, newChallenge] })),
  removeChallenge: (id) =>
    set((state) => ({
      challenges: state.challenges.filter((challenge) => challenge.id !== id),
    })),
  toggleChallengeCompletion: (id) =>
    set((state) => ({
      completedChallenges: state.completedChallenges.includes(id)
        ? state.completedChallenges.filter((challengeId) => challengeId !== id)
        : [...state.completedChallenges, id],
    })),
}));

export default useStore;
