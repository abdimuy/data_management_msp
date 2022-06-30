import { useState, useEffect } from 'react';
import { Container, Text, Loader } from 'renderer/components/atoms';
import { THIRD_FONT_COLOR } from 'contants';
import getReportesRuta from 'services/api_service/reportesRuta/getReportesRuta';
import { ListReportsRutas } from 'renderer/components/organisms';

const Reportes = () => {
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const handleGetReports = async () => {
    try {
      setLoading(true);
      const dataReports = await getReportesRuta();
      // console.log(dataReports);
      setReports(dataReports);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetReports();
  }, []);

  if (loading) {
    return <Loader isLoading={loading} />;
  }

  return (
    <Container
      paddingHorizontal="15px"
      paddingVertical="15px"
      borderRadius="5px"
      height="-webkit-fill-available"
      maxWidth="-webkit-fill-available"
      width="-webkit-fill-available"
      backgroundColor="trasparent"
      justifyContent="center"
      flexDirection="column"
      gap="20px"
    >
      <Text styles={{ fontSize: '30px', color: THIRD_FONT_COLOR }}>
        Reportes
      </Text>
      <ListReportsRutas reports={reports} />
    </Container>
  );
};

export default Reportes;
