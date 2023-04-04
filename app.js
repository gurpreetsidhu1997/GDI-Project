const team = [
  {
    id: "1",
    name: "Ankur Bansal",
    image: "/assets/profile-img1.png",
    designation: "Founder & CEO",
    education: "BTech",
    organisation: "GDI",
    pastExperience: "N/A",
    hobbies: "Travelling, Singing",
  },
  {
    id: "2",
    name: "Jahnvi",
    image: "/assets/profile-img2.png",
    designation: "Founder & CEO",
    education: "BTech",
    organisation: "GDI",
    pastExperience: "N/A",
    hobbies: "Travelling, Singing",
  },
  {
    id: "3",
    name: "Ankur",
    image: "/assets/profile-img3.png",
    designation: "Founder & CEO",
    education: "BTech",
    organisation: "GDI",
    pastExperience: "N/A",
    hobbies: "Travelling, Singing",
  },
  {
    id: "4",
    name: "Ankur Bansal",
    image: "/assets/profile-img1.png",
    designation: "Founder & CEO",
    education: "BTech",
    organisation: "GDI",
    pastExperience: "N/A",
    hobbies: "Travelling, Singing",
  },
  {
    id: "5",
    name: "Jahnvi",
    image: "/assets/profile-img2.png",
    designation: "Founder & CEO",
    education: "BTech",
    organisation: "GDI",
    pastExperience: "N/A",
    hobbies: "Travelling, Singing",
  },
  {
    id: "6",
    name: "Ankur",
    image: "/assets/profile-img3.png",
    designation: "Founder & CEO",
    education: "BTech",
    organisation: "GDI",
    pastExperience: "N/A",
    hobbies: "Travelling, Singing",
  },
];

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

function renderTeamMembers() {
  const teamMembersContainer = document.querySelector(".team-members");
  const selectedTeamMemberImage = document.querySelector(
    ".selected-team-member-image img"
  );
  const selectedTeamMemberName = document.querySelector(".name");
  const selectedTeamMemberDesignation = document.querySelector(".designation");
  const selectedTeamMemberEducation = document.querySelector(".education");
  const selectedTeamMemberOrganisation =
    document.querySelector(".organisation");
  const selectedTeamMemberExperience = document.querySelector(".experience");
  const selectedTeamMemberhobbies = document.querySelector(".hobbies");

  document.querySelector(".selected-team-member-image").style.display = "none";

  team.forEach((teamMember) => {
    const teamMemberContainer = document.createElement("div");
    const teamMemberImage = document.createElement("img");

    teamMemberContainer.classList.add("team-member");
    teamMemberImage.src = teamMember.image;

    teamMemberContainer.appendChild(teamMemberImage);
    teamMembersContainer.appendChild(teamMemberContainer);

    teamMemberContainer.addEventListener("click", () => {
      document.querySelector(".selected-team-member-image").style.display =
        "block";

      selectedTeamMemberImage.src = teamMember.image;
      selectedTeamMemberName.innerHTML = teamMember.name;
      selectedTeamMemberDesignation.innerHTML = teamMember.designation;
      selectedTeamMemberEducation.innerHTML =
        "EDUCATION: " + teamMember.education;
      selectedTeamMemberOrganisation.innerHTML =
        "AT GDi: " + teamMember.organisation;
      selectedTeamMemberExperience.innerHTML =
        "PAST EXPERIENCE: " + teamMember.pastExperience;
      selectedTeamMemberhobbies.innerHTML = "HOBBIES: " + teamMember.hobbies;

      document.querySelector(".selected-team-member-image").scrollIntoView();
    });
  });
}

(() => {
  renderTeamMembers();
})();
