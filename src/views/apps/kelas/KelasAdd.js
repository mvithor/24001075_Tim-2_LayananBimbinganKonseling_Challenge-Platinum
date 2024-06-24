import React, { useState } from "react";
import Alerts from "src/components/apps/siswa/siswaEdit/Alerts";
import BreadcrumbAddKelas from "src/components/apps/kelas/kelasAdd/BreadcrumbAddKelas";
import PageContainer from "src/components/container/PageContainer";
import ParentCard from "src/components/shared/ParentCard";
import TambahKelasForm from "src/components/apps/kelas/kelasAdd/TambahKelasForm";

const KelasAdd = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    return (
        <PageContainer>
          <BreadcrumbAddKelas />
          {success && <Alerts success={success} />}
          {error && <Alerts error={error} />}
          <ParentCard title="Form Tambah Kelas">
            <TambahKelasForm setSuccess={setSuccess} setError={setError} />
          </ParentCard>
        </PageContainer>
    );
};

export default KelasAdd;
