export default (event, navigator) => {
    if (event.type === 'DeepLink') {
        switch (event.link) {
            case 'Home':
                navigator.resetTo({
                    screen: 'kliklpd.Home',
                });
                break;

            case 'Simpanan':
                navigator.resetTo({
                    screen: 'kliklpd.Simpanan',
                });
                break;

            case 'AddSimpanan':
                navigator.resetTo({
                    screen: 'kliklpd.AddSimpanan',
                });
                break;

            case 'Pinjaman':
                navigator.resetTo({
                    screen: 'kliklpd.Pinjaman',
                });
                break;

            case 'AddPinjaman':
                navigator.resetTo({
                    screen: 'kliklpd.AddPinjaman',
                });
                break;

            case 'Pemberitahuan':
                navigator.resetTo({
                    screen: 'kliklpd.Pemberitahuan',
                });
                break;

            case 'Riwayat':
                navigator.resetTo({
                    screen: 'kliklpd.Riwayat',
                });
                break;

            case 'Profile':
                navigator.resetTo({
                    screen: 'kliklpd.Profile',
                });
                break;

            case 'Pengaturan':
                navigator.push({
                    screen: 'kliklpd.Pengaturan',
                });
                break;

            case 'Nasabah':
                navigator.push({
                    screen: 'kliklpd.Nasabah',
                });
                break;
            
            default:
                break;
        }
    }
};
