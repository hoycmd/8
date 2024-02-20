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

// запрет нанесения урона
Damage.GetContext().DamageOut.Value = false;

// параметры игры
Properties.GetContext().GameModeName.Value = "GameModes/EDITOR";
// создаем команды
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
	Teams.Add("Red", "Teams/Red", { r: 1 });
	Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);
}
if (blue || !red && !blue) {
	Teams.Add("Blue", "Teams/Blue", { b: 1 });
	Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
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
Spawns.GetContext().RespawnTime.Value = 0;


 player.contextedProperties.SkinType.Value = 2;
 player.inventory.Main.Value = true;  
 player.inventory.MainInfinity.Value = true;  
 player.inventory.Secondary.Value = true;   
 player.inventory.SecondaryInfinity.Value = true;  
 player.inventory.Melee.Value = true;  
 player.inventory.Explosive.Value = true;  
 player.inventory.ExplosiveInfinity.Value = true;  
 player.inventory.Build.Value = true;  
 player.inventory.BuildInfinity.Value = true;  
 player.Build.FlyEnable.Value = true;  

player.Build.FloodFill.Value = true;      
player.Build.FillQuad.Value = true;      
player.Build.RemoveQuad.Value = true;      
player.Build.BalkLenChange.Value = true;      
player.Build.FlyEnable.Value = true;      
player.Build.SetSkyEnable.Value = true;    
    
player.Build.GenMapEnable.Value = true;    
player.Build.ChangeCameraPointsEnable.Value = true;      
player.Build.QuadChangeEnable.Value = true;      
player.Build.BuildModeEnable.Value = true;      
player.Build.CollapseChangeEnable.Value = true;      
player.Build.RenameMapEnable.Value = true;      
player.Build.ChangeMapAuthorsEnable.Value = true;      
player.Build.LoadMapEnable.Value = true;      
player.Build.ChangeSpawnsEnable.Value = true;      
player.Build.BuildRangeEnable.Value = true;
	



