export default (event, navigator) => {
    if (event.type === 'DeepLink') {
        switch (event.link) {
            case 'Home':
                navigator.resetTo({
                    screen: 'kokaku.Home',
                });
                break;

            case 'Simpanan':
                navigator.resetTo({
                    screen: 'kokaku.Simpanan',
                });
                break;

            case 'AddSimpanan':
                navigator.resetTo({
                    screen: 'kokaku.AddSimpanan',
                });
                break;

            case 'Pinjaman':
                navigator.resetTo({
                    screen: 'kokaku.Pinjaman',
                });
                break;

            case 'AddPinjaman':
                navigator.resetTo({
                    screen: 'kokaku.AddPinjaman',
                });
                break;

            case 'Pemberitahuan':
                navigator.resetTo({
                    screen: 'kokaku.Pemberitahuan',
                });
                break;

            case 'Riwayat':
                navigator.resetTo({
                    screen: 'kokaku.Riwayat',
                });
                break;

            case 'Profile':
                navigator.resetTo({
                    screen: 'kokaku.Profile',
                });
                break;

            case 'Pengaturan':
                navigator.push({
                    screen: 'kokaku.Pengaturan',
                });
                break;

            case 'Nasabah':
                navigator.push({
                    screen: 'kokaku.Nasabah',
                });
                break;
            
            default:
                break;
        }
    }
};
