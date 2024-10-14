<template>
  <aside class="sidebar">
    <div class="logo">
      <img src="@/assets/tesla.svg" alt="Tesla Logo" />
    </div>

    <!-- Menu Items -->
    <nav class="menu">
      <router-link to="/reports" class="menu-item" active-class="active">
        <img src="@/assets/sideBarIcons/activeReports.svg" alt="Tesla Logo" />

        <span>Reports</span>
      </router-link>
      <router-link to="/library" class="menu-item">
        <img src="@/assets/sideBarIcons/library.svg" alt="Tesla Logo" />

        <span>Library</span>
      </router-link>
      <router-link to="/people" class="menu-item">
        <img src="@/assets/sideBarIcons/people.svg" alt="Tesla Logo" />

        <span>People</span>
      </router-link>
      <router-link to="/activities" class="menu-item">
        <img src="@/assets/sideBarIcons/activities.svg" alt="Tesla Logo" />

        <span>Activities</span>
      </router-link>
    </nav>

    <!-- Support Section -->
    <div class="support">
      <p>Support</p>
      <nav class="menu">
        <router-link to="/get-started" class="menu-item">
          <img src="@/assets/sideBarIcons/getStarted.svg" alt="Tesla Logo" />

          <span>Get Started</span>
        </router-link>
        <router-link to="/settings" class="menu-item">
          <img src="@/assets/sideBarIcons/settings.svg" alt="Tesla Logo" />

          <span>Settings</span>
        </router-link>
      </nav>
    </div>

    <!-- User Profile Section -->
    <div class="profile">
      <img src="@/assets/sideBarIcons/profile.svg" alt="Sam Wheeler" />

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
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 24px;
  overflow:hidden;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);


  .logo img {
    width: 127px;
    height: 15px;
    margin-bottom: 40px;
    margin-left: 11px;
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .menu-item {
      display: flex;
      gap: 12px;
      align-items: center;
      padding: 10px;
      text-decoration: none;
      color: #333;
      border-radius: 8px;

      i {
        margin-right: 10px;
      }

      &:hover,
      &.active {
        background-color: #eaf0ff;
        color: #333;
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
      color: #666;
    }
  }

  .profile {
    display: flex;
    align-items: center;

    .profile-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .profile-info {
      .profile-name {
        font-weight: bold;
      }
      .profile-email {
        color: #666;
        font-size: 12px;
      }
    }
  }
}
</style>
