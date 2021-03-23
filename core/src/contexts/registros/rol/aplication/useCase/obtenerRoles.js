class ObtenerRoles {
	constructor({ RolDomainRepository }) {
		this._domainRepository = RolDomainRepository;
	}
	async exe() {
		return await this._domainRepository.getAll();
	}
}
module.exports = ObtenerRoles;
