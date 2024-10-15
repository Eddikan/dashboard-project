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
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0px 24px 0px 24px;
  overflow: hidden;
  box-shadow: 0px 4.62px 18.47px 0px #0000000D;


  .logo img {
    width: 127px;
    height: 15px;
    margin-bottom: 40px;
    margin-left: 11px;
    margin-top: 24px;
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
      color: var(--gray3);
      border-radius: 8px;
      font-weight: 500;
      font-size: 14px;
      i {
        margin-right: 10px;
      }

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
    align-items: center;
    margin-top: auto;
    margin-bottom: 40px;
    padding-top: 18px;
    border-top: 1px solid var(--gray1);
    img {
      margin-bottom: 9px;
    }
    p {
      margin: 0px;
    }
    .profile-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .profile-info {
      .profile-name {
        font-weight: 600;
        font-family: Inter;
        font-size: 14px;
        line-height: 18px;
        text-align: left;
      }
      .profile-email {
        color: var(--gray0);
        //styleName: Body 2;
        font-size: 12px;
        font-weight: 400;
        line-height: 14.52px;
        text-align: left;
      }
    }
  }
}
</style>
