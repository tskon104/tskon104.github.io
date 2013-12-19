/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 380000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

// OpenSpending.identifier = 'yokohama_budget';		// 可変に↓;
OpenSpending.identifier = UseData.fileName;
// OpenSpending.year = '2012';							// 可変に↓
OpenSpending.year = UseData.year;

//確認用
alert("year num : " + UseData.year + ", fileName : " + UseData.fileName );

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* yokohama cofog 横手市に合わせて変更する　→　アイコン直した。残：色 */
  '1': { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#935B3B' },
  '1-1': { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#935B3B' },
  '2': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-1': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-2': { icon: 'icons/debt-asahikawa.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-3': { icon: 'icons/books.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-4': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-5': { icon: 'icons/ekonomija.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-6': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#0AB971' },
  '3': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-1': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-2': { icon: 'icons/child.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-3': { icon: 'icons/c_yougo.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-4': { icon: 'icons/javni_dug.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-5': { icon: 'icons/aid.svg', color: '#C75746', bcolor: '#4E6D00' },
  '4': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '4-1': { icon: 'icons/medical-supplies.svg', color: '#C75746', bcolor: '#D33673' },
  '4-2': { icon: 'icons/waste.svg', color: '#C75746', bcolor: '#D33673' },
  '4-3': { icon: 'icons/c_waterdoun-watersup.svg', color: '#C75746', bcolor: '#D33673' },
  '4-4': { icon: 'icons/ambulance.svg', color: '#C75746', bcolor: '#D33673' },
  '5': { icon: 'icons/c_bousai.svg', color: '#C75746', bcolor: '#2A3A03' },
  '5-1': { icon: 'icons/c_bousai.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '6': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-1': { icon: 'icons/c_nougyou.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-2': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#EC2406' },
  '7': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#938626' },
  '7-1': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#938626' },
  '8': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  '8-1': { icon: 'icons/environment-admin.svg', color: '#C75746', bcolor: '#C75746' },
  '8-2': { icon: 'icons/railways.svg', color: '#C75746', bcolor: '#C75746' },
  '8-3': { icon: 'icons/energy.svg', color: '#C75746', bcolor: '#C75746' },
  '8-4': { icon: 'icons/government-uk.svg', color: '#C75746', bcolor: '#C75746' },
  '8-5': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#C75746' },
  '9': { icon: 'icons/c_shyoubou.svg', color: '#C75746', bcolor: '#D33673' },
  '9-1': { icon: 'icons/c_shyoubou.svg', color: '#C75746', bcolor: '#D33673' },
  '10': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '10-1': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  '10-2': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#790586' },
  '10-3': { icon: 'icons/secondary-lower.svg', color: '#C75746', bcolor: '#790586' },
  '10-4': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#790586' },
  '10-5': { icon: 'icons/c_kenkou.svg', color: '#C75746', bcolor: '#790586' },
  '11': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '11-1': { icon: 'icons/c_sankaku_ikusei.svg', color: '#C75746', bcolor: '#790586' },
  '11-2': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#790586' },
  '12': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#790586' },
  '12-1': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#790586' },
  '13': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#790586' },
  '13-1': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#790586' },
  '13-2': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#790586' }
};


