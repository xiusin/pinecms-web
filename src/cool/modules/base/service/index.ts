import Common from "./common";
import Open from "./open";
import SysUser from "./system/user";
import SysMenu from "./system/menu";
import SysRole from "./system/role";
import SysDept from "./system/dept";
import SysTask from "./system/task";
import SysSetting from "./system/setting";
import SysLog from "./system/log";
import PluginInfo from "./plugin/info";
import SysAd from "./system/ad";
import SysLink from "./system/link";
import SysAssets from "./system/assets";
import SysAttachment from "./system/attachment";
import SysDatabaseList from "./system/database_list";
import SysDict from "./system/dict";
import SysModel from "./system/model";
import SysDictCategory from "./system/dict_category";
import SysDatabaseBackupList from "./system/database_backup_list";
import SysCategory from "./system/category";
import SysDocument from "./system/document";
import SysAdSpace from "./system/ad_space";
import SysDepartment from "./system/department";
import SysPosition from "./system/position";
import SysLevel from "./system/level";
import SysStat from "./system/stat";
import SysTags from "./system/tags";
import SysMember from "./system/member";
import SysMemberGroup from "./system/member_group";
import SysTable from "./system/table";
import SysContent from "./system/content";
import SysDistrict from "./system/district";
import SysErrLog from "./system/errlog";

export default {
	common: new Common(),
	open: new Open(),
	system: {
		user: new SysUser(),
		menu: new SysMenu(),
		role: new SysRole(),
		dept: new SysDept(),
		task: new SysTask(),
		setting: new SysSetting(),
		log: new SysLog(),
		ad: new SysAd(),
		adSpace: new SysAdSpace(),
		link: new SysLink(),
		assets: new SysAssets(),
		attachment: new SysAttachment(),
		databaseList: new SysDatabaseList(),
		databaseBackupList: new SysDatabaseBackupList(),
		dict: new SysDict(),
		model: new SysModel(),
		dictCategory: new SysDictCategory(),
		category: new SysCategory(),
		document: new SysDocument(),
		department: new SysDepartment(),
		position: new SysPosition(),
		level: new SysLevel(),
		stat: new SysStat(),
		tags: new SysTags(),
		member: new SysMember(),
		memberGroup: new SysMemberGroup(),
		table: new SysTable(),
		content: new SysContent(),
		district: new SysDistrict(),
		errorLog: new SysErrLog()
	},
	plugin: {
		info: new PluginInfo()
	}
};
