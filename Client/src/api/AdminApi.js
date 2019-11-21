export default {
  ImagesCleaner: {
    GetAllImages: '/Admin/ImagesCleaner/GetAllImages',
    DeleteImages: '/Admin/ImagesCleaner/DeleteImages',
  },
  CypherSecretsAdmin: {
    ResetCypher: '/Admin/CypherSecretsAdmin/ResetCypher',
  },
  AdminCacheSettings: {
    GetCurrentCacheSettings: '/Admin/AdminCacheSettings/GetCurrentCacheSettings',
    ChangeCachePolicy: '/Admin/AdminCacheSettings/ChangeCachePolicy',
  },
  UserRolesAdmin: {
    GetRoleUsers:  '/Admin/UserRolesAdmin/GetRoleUsers',
    GetUserRoles: '/Admin/UserRolesAdmin/GetUserRoles',
    RemoveUserFromRole: '/Admin/UserRolesAdmin/RemoveUserFromRole',
    AddUserToRole: '/Admin/UserRolesAdmin/AddUserToRole',
    GetAllRoles: '/Admin/UserRolesAdmin/GetAllRoles'
  },
  RolesPermissionsAdmin: {
    GetJson: '/Admin/RolesPermissionsAdmin/GetJson',
    UploadJson: '/Admin/RolesPermissionsAdmin/UploadJson',
  },
  MenuAdmin: {
    Create: 'Admin/MenuAdmin/Create',
    Update: 'Admin/MenuAdmin/Update',
    SetIsHidden: '/Admin/MenuAdmin/SetIsHidden',
    Delete: '/Admin/MenuAdmin/Delete',
    Up: 'Admin/MenuAdmin/Up',
    Down: 'Admin/MenuAdmin/Down',
    GetMenuItem: '/Admin/MenuAdmin/GetMenuItem',
    GetMenuItems: '/Admin/MenuAdmin/GetMenuItems',
  },
  ComponentsAdmin: {
    AddComponent: '/Admin/ComponentsAdmin/AddComponent',
    UpdateComponent: '/Admin/ComponentsAdmin/UpdateComponent',
    DeleteComponent: '/Admin/ComponentsAdmin/DeleteComponent',
    GetAllComponents: '/Admin/ComponentsAdmin/GetAllComponents',
    GetComponent: '/Admin/ComponentsAdmin/GetComponent',
  },
  CategoriesAdmin: {
    CategoryUp: '/Admin/CategoriesAdmin/CategoryUp',
    CategoryDown: '/Admin/CategoriesAdmin/CategoryDown',
    GetAllCategories: '/Admin/CategoriesAdmin/GetAllCategories',
    UpdateCategory: '/Admin/CategoriesAdmin/UpdateCategory',
    CreateCategory: '/Admin/CategoriesAdmin/CreateCategory',
    CategoryMoveToTrash: '/Admin/CategoriesAdmin/CategoryMoveToTrash',
    GetCategory: '/Admin/CategoriesAdmin/GetCategory'
  },
  CacheAdmin: {
    ResetAllCache: '/Admin/CacheAdmin/ResetAllCache'
  },
  SkinsAdmin: {
    GetAllSkins: '/Admin/SkinsAdmin/GetAllSkins',
    GetSkinPreview: '/Admin/SkinsAdmin/GetSkinPreview',
    UploadSkin: '/Admin/SkinsAdmin/UploadSkin',
    ChangeSkin: '/Admin/SkinsAdmin/ChangeSkin',
    DeleteSkin: '/Admin/SkinsAdmin/DeleteSkin'
  },
  ConfigurationAdmin: {
    UploadConfiguration: '/Admin/ConfigurationAdmin/UploadConfiguration',
    LoadConfiguration: '/Admin/ConfigurationAdmin/LoadConfiguration',
    GetEnums: '/Admin/ConfigurationAdmin/GetEnums',
  },
  ServerInfoAdmin: {
    Version: '/Admin/ServerInfoAdmin/Version',
    DotnetVersion: '/Admin/ServerInfoAdmin/DotnetVersion',
    GetServerInfo: '/Admin/ServerInfoAdmin/GetServerInfo'
  }
}
