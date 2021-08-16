'use strict';

// ----------------------------------------------------------------------------------
// MANAGER
// ----------------------------------------------------------------------------------
const generateManager = (teamManager) => {
  return `
                <div class="column is-4">
                  <div class="card large">
                    <div class="card-content">
                      <div class="media">
                        <div class="media-content has-text-left">
                          <p class="title is-3 no-padding">${teamManager.getName()}</p>
                          <div class="level">
                            <p class="title is-4 level-item level-left"><ion-icon name="cafe-outline" class="icon is-medium pr-3"></ion-icon> ${teamManager.getRole()}</p>
                          </div>
                        </div>
                      </div>
                      <div class="media">
                        <div class="media-content">
                          <p class="title is-6 no-padding">ID: ${teamManager.getId()}</p>
                          <p>
                            <span class="title is-6"> Email:<a href="mailto:${teamManager.getEmail()}"> ${teamManager.getEmail()} </a></span>
                          </p>
                          <p class="title is-6 mt-5">Office Number: ${teamManager.getOfficeNumber()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        `;
};

// ----------------------------------------------------------------------------------
// ENGINEER
// ----------------------------------------------------------------------------------

const generateEngineer = (teamEngineer) => {
  return `
                <div class="column is-4">
                  <div class="card large">
                    <div class="card-content">
                      <div class="media">
                        <div class="media-content has-text-left">
                          <p class="title is-3 no-padding">${teamEngineer.getName()}</p>
                          <div class="level">
                            <p class="title is-4 level-item level-left"><ion-icon name="cart-outline" class="icon is-medium pr-3"></ion-icon> ${teamEngineer.getRole()}</p>
                          </div>
                        </div>
                      </div>
                      <div class="media">
                        <div class="media-content">
                          <p class="title is-6 no-padding">ID: ${teamEngineer.getId()}</p>
                          <p>
                            <span class="title is-6"> Email:<a href="mailto:${teamEngineer.getEmail()}"> ${teamEngineer.getEmail()} </a></span>
                          </p>
                          <p class="title is-6 mt-5">Github: ${teamEngineer.getGithub()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        `;
};

// SUMMARY --------------------------------------------------------------------------
// Function to loop over the data responses and check which team member is being added.
// Then added the data to the joinProfiles array
// Then join the array elements into one string
// ----------------------------------------------------------------------------------
function teamProfile(profiles) {
  const joinProfiles = [];

  profiles.forEach(function (v, i, r) {
    joinProfiles.push(profiles[i].getRole() === 'Manager' ? generateManager(profiles[Number(i)]) : '');
    joinProfiles.push(profiles[i].getRole() === 'Engineer' ? generateEngineer(profiles[Number(i)]) : '');
  });

  return joinProfiles.join('');
}

// ----------------------------------------------------------------------------------
// FINAL HTML OUTPUT
// ----------------------------------------------------------------------------------
module.exports = (data) => {
  return `
  <!DOCTYPE html>
  <html lang="en" class="has-background-light">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- Bulma -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
      <script src="https://kit.fontawesome.com/7dc3015a44.js" crossorigin="anonymous"></script>
      <title>Team Profile Generator</title>
    </head>
    <body>
      <div class="container is-family-monospace">
        <div class="section">
          <div class="columns">
            <div class="column has-text-centered">
              <h1 class="title is-size-1" style="color: #212529">My Team</h1>
              <br />
            </div>
          </div>
          <div id="app" class="row columns is-multiline is-centered is-vcentered">
                ${teamProfile(data)}
          </div>
        </div>
      </div>
  
      <!--------------------------------------------------------------->
      <!-- SCRIPTS -->
      <!--------------------------------------------------------------->
      <script type="module" src="https://unpkg.com/ionicons@5.5.1/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule="" src="https://unpkg.com/ionicons@5.5.1/dist/ionicons/ionicons.js"></script>
    </body>
  </html>
      `;
};
