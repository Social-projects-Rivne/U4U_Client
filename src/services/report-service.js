import request from './request';

class reportService {
  async report({ userJwt, report, placeId, rating }) {
    await request.post('reports', {
      userJwt,
      report,
      placeId,
      rating
    });
  }

  getAllReports = async reportId => {
    try {
      const reports = await request.get(`reports/${reportId}`);
      return reports;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export default new reportService();
