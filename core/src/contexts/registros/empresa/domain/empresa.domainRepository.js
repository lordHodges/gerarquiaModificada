const BaseDomainCrud = require("../../shared/baseCrudSystem/base.domainCrud");
const EmpresaDomainModel = require("./empresa.domainModel");

class EmpresaDomainRepository extends BaseDomainCrud {
	constructor({ EmpresaDalRepository }) {
		super(EmpresaDalRepository);
		this._repository = EmpresaRepository;
		this.empresa = EmpresaDomainModel;
	}

	async getAllWithSucursal() {
		const empresas = await this._empresaRepository.getAllWithSucursal();
		return empresas;
	}

	async getOneWithSucursal(id) {
		const empresa = await this._empresaRepository.getOneWithSucursal(id);
		if (!empresa) return null;
		return empresa;
	}
}
module.exports = EmpresaDomainRepository;
