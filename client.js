// разрешения
var test;
Damage.FriendlyFire = true;
BreackGraph.OnlyPlayerBlocksDmg = true;
BreackGraph.WeakBlocks = true;
// делаем возможным ломать все блоки
BreackGraph.BreackAll = true;
// показываем количество квадов
Ui.GetContext().QuadsCount.Value = true;
// разрешаем все чистые блоки
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;
// вкл строительные опции
Build.GetContext().Pipette.Value = true;
Build.GetContext().FloodFill.Value = true;
Build.GetContext().FillQuad.Value = true;
Build.GetContext().RemoveQuad.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().FlyEnable.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = true;
Build.GetContext().CollapseChangeEnable.Value = true;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = true;
Build.GetContext().BuildRangeEnable.Value = true;

// нанесения урона
Damage.GetContext().DamageOut.Value = true;

// параметры игры
Properties.GetContext().GameModeName.Value = "GameModes/EDITOR";
// создаем команды
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
	Teams.Add("СТРОИТЕЛИ|КРАСНЫЕ", "Teams/Red", { r: 2 });
	Teams.Get("СТРОИТЕЛИ|КРАСНЫЕ").Spawns.SpawnPointsGroups.Add(2);
}
if (blue || !red && !blue) {
	Teams.Add("СТРОИТЕЛИ|СИНИЕ", "Teams/Blue", { b: 3 });
	Teams.Get("СТРОИТЕЛИ|СИНИЕ").Spawns.SpawnPointsGroups.Add(3);
}

// разрешаем вход в команды по запросу
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});
// спавн по входу в команду
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});

// задаем подсказку
Ui.getContext().Hint.Value = "Hint/BuildBase";

// конфигурация инвентаря
var roomInventory = Inventory.GetContext();
roomInventory.Main.Value = true;
roomInventory.Secondary.Value = true;
roomInventory.Melee.Value = true;
roomInventory.Explosive.Value = true;
roomInventory.Build.Value = true;
roomInventory.BuildInfinity.Value = true;

// моментальный спавн
Spawns.GetContext().RespawnTime.Value = 1;

//
 var roomInventory = Inventory.GetContext();
inventory.player.Unlimited.Secondary.Value = true;
inventory.player.Unlimited.Explosive.Value = true;
inventory.player.Unlimited.Basic.Value = true;


 
	



