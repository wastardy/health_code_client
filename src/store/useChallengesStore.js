import { create } from "zustand";

const useStore = create((set) => ({
  challenges: [
    {
      id: 1,
      icon: "../src/assets/logos/test4.png",
      title: "The Power Push-Up Challenge",
      description:
        "Push-ups are a classic test of upper body strength, endurance, and mental fortitude. For this challenge, aim to do as many push-ups as you can in a row.",
    },
    {
      id: 2,
      icon: "../src/assets/logos/test2.png",
      title: "The Hydration Hustle Challenge",
      description:
        "Drink a set amount of water daily (e.g., 2-3 liters or half your body weight in ounces) for 7 days.",
    },
    {
      id: 3,
      icon: "../src/assets/logos/test3.png",
      title: "The Sleep Recharge Challenge",
      description:
        "Avoid screens at least 30 minutes before bed and create a calming bedtime routine to signal to your body that it's time to rest",
    },
    {
      id: 4,
      icon: "../src/assets/logos/test4.png",
      title: "The Core Crusher Challenge",
      description:
        "Your core is the foundation of all movement. This challenge focuses on building core strength and stability. ",
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
