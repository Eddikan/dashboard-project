<template>
  <aside class="sidebar">
    <div class="logo">
      <img src="@/assets/tesla.svg" alt="Tesla Logo" />
    </div>

    <!-- Menu Items -->
    <nav class="menu">
      <router-link to="/reports" class="menu-item" active-class="active">
        <img src="@/assets/sideBarIcons/activeReports.svg" alt="Reports Icon" />
        <span>Reports</span>
      </router-link>
      <router-link to="/library" class="menu-item">
        <img src="@/assets/sideBarIcons/library.svg" alt="Library Icon" />
        <span>Library</span>
      </router-link>
      <router-link to="/people" class="menu-item">
        <img src="@/assets/sideBarIcons/people.svg" alt="People Icon" />
        <span>People</span>
      </router-link>
      <router-link to="/activities" class="menu-item">
        <img src="@/assets/sideBarIcons/activities.svg" alt="Activities Icon" />
        <span>Activities</span>
      </router-link>
    </nav>

    <!-- Support Section -->
    <div class="support">
      <p>Support</p>
      <nav class="menu">
        <router-link to="/get-started" class="menu-item">
          <img src="@/assets/sideBarIcons/getStarted.svg" alt="Get Started Icon" />
          <span>Get Started</span>
        </router-link>
        <router-link to="/settings" class="menu-item">
          <img src="@/assets/sideBarIcons/settings.svg" alt="Settings Icon" />
          <span>Settings</span>
        </router-link>
      </nav>
    </div>

    <!-- User Profile Section -->
    <div class="profile">
      <img src="@/assets/sideBarIcons/profile.svg" alt="Profile Picture" />
      <div class="profile-info">
        <p class="profile-name">Sam Wheeler</p>
        <p class="profile-email">samwheeler@example.com</p>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped lang="scss">
.sidebar {
  width: 250px;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0px 24px;
  overflow: hidden;
  box-shadow: 0px 4.62px 18.47px 0px #0000000D;

  .logo img {
    width: 127px;
    height: 15px;
    margin: 24px 0 40px 11px;
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-x:auto;

    .menu-item {
      display: flex;
      gap: 12px;
      align-items: center;
      padding: 10px;
      text-decoration: none;
      color: var(--gray3);
      border-radius: 8px;
      font-weight: 500;
      font-size: 14px;

      &:hover,
      &.active {
        background-color: var(--blue0);
        color: var(--black);
      }

      span {
        font-size: 16px;
      }
    }
  }

  .support {
    margin-top: 40px;
    p {
      margin-bottom: 10px;
      font-weight: bold;
      color: var(--gray4);
    }
  }

  .profile {
    display: flex;
    align-items: center;
    margin-top: auto;
    margin-bottom: 40px;
    padding-top: 18px;
    border-top: 1px solid var(--gray1);

    img {
      margin-bottom: 9px;
    }

    .profile-info {
      .profile-name {
        font-weight: 600;
        font-size: 14px;
      }

      .profile-email {
        color: var(--gray0);
        font-size: 12px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    padding: 10px;

    .menu {
      flex-direction: row;
      justify-content: space-between;
      gap: 10px;
    }

    .profile {
      display: none;
    }

    .support {
      display: none;
    }
  }
}
</style>