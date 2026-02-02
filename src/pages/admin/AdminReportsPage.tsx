import { useEffect, useState } from 'react';
import { FileText, Download, TrendingUp, Users, DollarSign, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/components/layout/AdminLayout';
import { reportService } from '@/lib/services';
import { useToast } from '@/hooks/use-toast';

const AdminReportsPage = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const reports = [
    {
      id: 'overview',
      title: 'Relatório Geral',
      description: 'Visão geral do sistema com métricas principais',
      icon: TrendingUp,
      color: 'text-primary',
    },
    {
      id: 'users',
      title: 'Relatório de Usuários',
      description: 'Análise detalhada de usuários e cadastros',
      icon: Users,
      color: 'text-blue-500',
    },
    {
      id: 'listings',
      title: 'Relatório de Anúncios',
      description: 'Estatísticas de anúncios por categoria e status',
      icon: Package,
      color: 'text-purple-500',
    },
    {
      id: 'financial',
      title: 'Relatório Financeiro',
      description: 'Receitas, vendas e análise financeira',
      icon: DollarSign,
      color: 'text-green-500',
    },
  ];

  const handleGenerateReport = async (reportType: string) => {
    try {
      setLoading(true);
      let response;

      switch (reportType) {
        case 'overview':
          response = await reportService.getOverview();
          break;
        case 'users':
          response = await reportService.getUsers();
          break;
        case 'listings':
          response = await reportService.getListings();
          break;
        case 'financial':
          response = await reportService.getFinancial();
          break;
        default:
          throw new Error('Tipo de relatório inválido');
      }

      if (response.success) {
        // Criar um JSON blob para download
        const dataStr = JSON.stringify(response.data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `relatorio-${reportType}-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        toast({
          title: 'Sucesso',
          description: 'Relatório gerado com sucesso',
        });
      }
    } catch (error: any) {
      console.error('Erro ao gerar relatório:', error);
      toast({
        title: 'Erro',
        description: error.response?.data?.message || 'Não foi possível gerar o relatório',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Relatórios</h1>
          <p className="text-muted-foreground">Gere e baixe relatórios do sistema</p>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report) => {
            const Icon = report.icon;
            return (
              <Card key={report.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${report.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>{report.title}</CardTitle>
                      <CardDescription>{report.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full gap-2"
                    onClick={() => handleGenerateReport(report.id)}
                    disabled={loading}
                  >
                    <Download className="h-4 w-4" />
                    {loading ? 'Gerando...' : 'Gerar Relatório'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Info Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Sobre os Relatórios
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              • Os relatórios são gerados em tempo real com os dados atuais do sistema
            </p>
            <p>
              • O formato de exportação é JSON, que pode ser importado em ferramentas de análise
            </p>
            <p>
              • Relatórios podem ser agendados para geração automática (em breve)
            </p>
            <p>
              • Para análises mais detalhadas, utilize ferramentas de BI externas
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminReportsPage;
