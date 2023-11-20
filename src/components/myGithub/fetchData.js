export const githubData = async function () {
  const response = await fetch("https://api.github.com/users/Esraa102");

  return response.json();
};
